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
		"content": `<style>.sjh9_abeo {
  fill: currentColor;
  d: path("M19.25 11.002c.967 0 1.75.783 1.75 1.75v6.5a1.75 1.75 0 0 1-1.75 1.75h-4.5a1.75 1.75 0 0 1-1.75-1.75v-6.5c0-.967.784-1.75 1.75-1.75zm-9.982 4.012c.967 0 1.75.784 1.75 1.75v2.488a1.75 1.75 0 0 1-1.75 1.75H4.754a1.75 1.75 0 0 1-1.75-1.75v-2.488c0-.966.783-1.75 1.75-1.75zM9.254 3c.966 0 1.75.784 1.75 1.75v6.5a1.75 1.75 0 0 1-1.607 1.744L9.254 13h-4.5a1.75 1.75 0 0 1-1.75-1.75v-6.5c0-.966.783-1.75 1.75-1.75zm9.996 0c.967 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 19.25 9h-4.5A1.75 1.75 0 0 1 13 7.25v-2.5c0-.966.784-1.75 1.75-1.75z");
}
</style><path class="sjh9_abeo"/>`,
		"fallback": "fluent:glance-24-filled",
	});
}

export default Component;
