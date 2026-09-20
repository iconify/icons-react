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
		"content": `<style>.e2o12e54v {
  fill: currentColor;
  d: path("M10.154 14H7.169q-.407 0-.59-.355t.054-.681l5.629-8.155q.153-.215.38-.285t.48.022t.365.304t.082.463L12.866 11h3.586q.42 0 .595.383q.176.383-.095.71l-6.264 7.503q-.16.19-.386.243q-.227.052-.448-.047q-.221-.098-.338-.297q-.116-.199-.085-.45z");
}
</style><path class="e2o12e54v"/>`,
		"fallback": "material-symbols-light:bolt-rounded",
	});
}

export default Component;
