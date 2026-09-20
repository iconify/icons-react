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
		"content": `<style>.ck0h4jl_b {
  fill: currentColor;
  d: path("M24 35.75A4.25 4.25 0 0 1 19.75 40H8.25A4.25 4.25 0 0 1 4 35.75V18.5h20zM39.75 8A4.25 4.25 0 0 1 44 12.25v26.5a1.25 1.25 0 1 1-2.5 0V16H4v-3.75A4.25 4.25 0 0 1 8.25 8zm-28.5 16a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="ck0h4jl_b"/>`,
		"fallback": "fluent:desk-48-filled",
	});
}

export default Component;
