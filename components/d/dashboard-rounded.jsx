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
		"content": `<style>.ipzg_jbkn {
  fill: currentColor;
  d: path("M14.305 9q-.345 0-.575-.23t-.23-.587V4.817q0-.357.234-.587t.58-.23h4.88q.347 0 .576.23t.23.587v3.366q0 .358-.234.587q-.234.23-.58.23zm-9.5 3q-.345 0-.575-.23T4 11.2V4.8q0-.34.234-.57t.58-.23h4.88q.347 0 .576.23t.23.57v6.4q0 .34-.234.57t-.58.23zm9.5 8q-.345 0-.575-.23t-.23-.57v-6.4q0-.34.234-.57t.58-.23h4.88q.347 0 .576.23t.23.57v6.4q0 .34-.234.57t-.58.23zm-9.5 0q-.345 0-.575-.23T4 19.183v-3.366q0-.357.234-.587t.58-.23h4.88q.347 0 .576.23t.23.587v3.366q0 .358-.234.587q-.234.23-.58.23z");
}
</style><path class="ipzg_jbkn"/>`,
		"fallback": "material-symbols-light:dashboard-rounded",
	});
}

export default Component;
