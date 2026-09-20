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
		"content": `<style>.bcphbgq5o {
  fill: currentColor;
  d: path("M3.77 20.154q-.441 0-.74-.3t-.3-.738V4.192q0-.44.3-.739q.299-.3.74-.3h6.922q.44 0 .74.3q.299.299.299.74v2.96h8.5q.44 0 .74.3q.298.299.298.74v10.923q0 .44-.299.739t-.74.299zm-.04-1h7v-3h-7zm0-4h7v-3h-7zm0-4h7v-3h-7zm0-4h7v-3h-7zm8 12h8.54v-11h-8.54zm2.886-7q-.213 0-.357-.144q-.143-.144-.143-.357t.143-.356t.357-.143H17q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0 4q-.213 0-.357-.144q-.143-.144-.143-.357t.143-.356t.357-.143H17q.213 0 .356.144t.144.357t-.144.356t-.356.143z");
}
</style><path class="bcphbgq5o"/>`,
		"fallback": "material-symbols-light:corporate-fare-outline-rounded",
	});
}

export default Component;
