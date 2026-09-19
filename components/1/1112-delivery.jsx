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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.iq56e3-2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.447 29.428c.666-2.243 3.31-4.065 5.567-3.645c1.459.28 2.304 1.682 1.986 3.224c-.192 1.122-.987 2.383-2.036 3.084c-1.916 1.262-7.764 4.906-7.764 4.906h7.43M17.328 27.25l3.286-1.532L16.933 37m10.113-24.468L30.332 11l-3.681 11.282m-8.616-9.75L21.32 11l-3.68 11.282");
}
</style><path class="iq56e3-2p"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:1112-delivery",
	});
}

export default Component;
