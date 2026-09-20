import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sy1vk8oyb {
  fill: currentColor;
  d: path("M234 92.55s-.05 0-.09-.07l-104-56a4 4 0 0 0-3.8 0l-104 56l-.11.08A4 4 0 0 0 20 96v64a4 4 0 0 0 2 3.45a1 1 0 0 0 .09.07l104 56a4 4 0 0 0 3.8 0l104-56a.3.3 0 0 0 .08-.07a4 4 0 0 0 2-3.45V96a4 4 0 0 0-1.97-3.45m-6 60.75L181 128l47-25.3Zm-55.43-29.84L132 101.61V46.7L223.56 96Zm-44.57 24L91.87 128L128 108.54L164.13 128ZM124 46.7v54.91l-40.57 21.85L32.44 96Zm-96 56L75 128l-47 25.3Zm55.43 29.84L124 154.39v54.91L32.44 160ZM132 209.3v-54.91l40.57-21.85l51 27.46Z");
}
</style><path class="sy1vk8oyb"/>`,
		"fallback": "ph:codepen-logo-thin",
	});
}

export default Component;
