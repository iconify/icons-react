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
		"content": `<style>.h4qy-jbfj {
  fill: currentColor;
  d: path("M11.643 13.933q-.143-.143-.143-.356v-7q0-.212.144-.356t.357-.144t.356.144t.143.356v7q0 .213-.144.356t-.357.144t-.356-.144m0 3.846q-.143-.144-.143-.357t.144-.356t.357-.143t.356.144t.143.357t-.144.356t-.357.143t-.356-.144");
}
</style><path class="h4qy-jbfj"/>`,
		"fallback": "material-symbols-light:exclamation-rounded",
	});
}

export default Component;
