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
		"content": `<style>.hl95pcnoq {
  fill: currentColor;
  d: path("M19.584 4.83a6.25 6.25 0 0 1 8.839 0l14.753 14.753a6.25 6.25 0 0 1 0 8.839L28.423 43.174a6.25 6.25 0 0 1-8.84 0L4.832 28.422a6.25 6.25 0 0 1 0-8.84zm7.071 1.767a3.75 3.75 0 0 0-5.304 0L6.6 21.35a3.75 3.75 0 0 0 0 5.303l14.75 14.753a3.75 3.75 0 0 0 5.304 0l14.752-14.753a3.75 3.75 0 0 0 0-5.303zm-1.289 6.269a1.25 1.25 0 0 1 1.768 0l5.5 5.5a1.25 1.25 0 0 1 0 1.768l-5.5 5.5a1.25 1.25 0 1 1-1.768-1.768l3.366-3.366H24.25a3.75 3.75 0 0 0-3.75 3.75v7.5a1.25 1.25 0 0 1-2.5 0v-7.5A6.25 6.25 0 0 1 24.25 18h4.482l-3.366-3.366a1.25 1.25 0 0 1 0-1.768");
}
</style><path class="hl95pcnoq"/>`,
		"fallback": "fluent:directions-48-regular",
	});
}

export default Component;
