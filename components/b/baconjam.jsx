import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fvnjibckg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.207 36.33c.644 2.4-1.43 5.041-4.63 5.9c-3.2.857-6.317-.394-6.96-2.795s1.43-5.041 4.63-5.899s6.317.393 6.96 2.794m25.176 0c.643 2.4-1.43 5.041-4.63 5.9c-3.201.857-6.317-.394-6.96-2.795c-.644-2.4 1.43-5.041 4.63-5.899s6.317.393 6.96 2.794m-25.06.887V17m25.175 0v20.217M17.324 7.25H42.5M17.324 13H42.5m-25.176 2.5H42.5M17.324 9.75H42.5M17.323 5.501h25.175V15.5H17.323z");
}
</style><path class="fvnjibckg"/>`,
		"fallback": "arcticons:baconjam",
	});
}

export default Component;
