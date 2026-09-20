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
		"content": `<style>.izn9c9b2v {
  fill: currentColor;
  d: path("M4.539 20.154q-.441 0-.74-.3t-.299-.738V8.192q0-.44.299-.739q.299-.3.74-.3H7.5v-2.96q0-.441.299-.74q.299-.3.74-.3h6.923q.44 0 .739.3q.299.299.299.74v6.96h2.962q.44 0 .739.3q.299.299.299.74v6.923q0 .44-.299.739t-.74.299H13.5v-4h-3v4zm-.039-1h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4 4h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4 8h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4 12h3v-3h-3zm0-4h3v-3h-3z");
}
</style><path class="izn9c9b2v"/>`,
		"fallback": "material-symbols-light:apartment-rounded",
	});
}

export default Component;
