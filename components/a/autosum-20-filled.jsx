import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v2kjyq1tg {
  fill: currentColor;
  d: path("M3.81 3.706a.75.75 0 0 1 .69-.456h11a.75.75 0 0 1 0 1.5H6.262l4.146 4.308a.75.75 0 0 1 .035 1.001L6.104 15.25H15.5a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.575-1.231L8.86 9.613L3.96 4.52a.75.75 0 0 1-.15-.814");
}
</style><path class="v2kjyq1tg"/>`,
		"fallback": "fluent:autosum-20-filled",
	});
}

export default Component;
