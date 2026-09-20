import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yqia4abec {
  fill: currentColor;
  d: path("M22 20h-7q0-.5-.038-1t-.112-1H20V6H4v1.15q-.5-.075-1-.112T2 7V4h20zM2 20v-3q1.25 0 2.125.875T5 20zm5 0q0-2.075-1.463-3.537T2 15v-2q2.925 0 4.963 2.038T9 20zm4 0q0-1.875-.712-3.512t-1.926-2.85t-2.85-1.925T2 11V9q2.275 0 4.275.863t3.5 2.362t2.363 3.5T13 20z");
}
</style><path class="yqia4abec"/>`,
		"fallback": "material-symbols:cast-outline-sharp",
	});
}

export default Component;
