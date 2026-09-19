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
		"content": `<style>.oj652hrdg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.1 40.906V7.094h5.494C34.892 7.094 42.5 14.702 42.5 24h0c0 9.298-7.608 16.906-16.906 16.906zM5.5 26.95h9.241v9.241H5.5zm0-15.967h9.241v9.241H5.5z");
}
</style><path class="oj652hrdg"/>`,
		"fallback": "arcticons:dropout",
	});
}

export default Component;
