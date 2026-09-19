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
		"content": `<style>.t7sm94bui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.495 43.295a21.5 21.5 0 1 1 .368-38.405m3.561 3.957L21.66 20.034m21.56-3.458L27.153 28.068m17.694-1.628l-12.203 9.255");
}
</style><path class="t7sm94bui"/>`,
		"fallback": "arcticons:curve",
	});
}

export default Component;
