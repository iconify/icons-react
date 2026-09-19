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

.ec_27kzxf {
  cx: 24px;
  cy: 24px;
  r: 11.638px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nfwk-d1jq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.194 2.682c4.032 3.402 4.409 8.07 4.409 9.79M44.7 29.83c-4.865 1.149-8.883.4-10.372-.46M8.286 38.674c.783-5.05 3.52-9.242 5.009-10.101");
}
</style><circle class="cpk0fnbgt"/><circle class="ec_27kzxf"/><path class="nfwk-d1jq"/>`,
		"fallback": "arcticons:autosync-for-google-drive",
	});
}

export default Component;
