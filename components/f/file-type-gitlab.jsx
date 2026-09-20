import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jwdsmbbsh {
  fill: var(--svg-color--fca326, #fca326);
  d: path("m10.7 25.8l2.9 2.2l1.7 1.3c.4.3 1 .3 1.4 0l1.7-1.3l2.9-2.2s-2.5-1.9-5.3-4c-2.9 2.1-5.3 4-5.3 4");
}

.rki_d2qkr {
  fill: var(--svg-color--fc6d26, #fc6d26);
  d: path("M29.5 13.2v-.1c-1.9.4-3.6 1.2-5.1 2.3L16 21.7c2.9 2.2 5.3 4 5.3 4l5.8-4.4c2.6-1.8 3.6-5.2 2.4-8.1");
}

.tu3nhnneh {
  fill: var(--svg-color--e24329, #e24329);
  d: path("M29.5 13.2v-.1l-3.8-9.9c-.1-.2-.2-.4-.4-.5c-.4-.2-.8-.2-1.2.1c-.1.1-.3.2-.3.4l-2.6 7.9H10.8L8.2 3.2c0-.2-.2-.3-.3-.5c-.4-.2-.8-.3-1.2 0c-.2.1-.3.2-.4.4L2.5 13v.1c-1.1 2.9-.2 6.3 2.3 8.2l5.8 4.3l2.9 2.2l1.7 1.3c.4.3 1 .3 1.4 0l1.7-1.3l2.9-2.2l5.8-4.4c2.7-1.7 3.7-5.1 2.5-8");
}

.yvyrvfbcg {
  fill: var(--svg-color--fc6d26, #fc6d26);
  d: path("M7.6 15.4c-1.5-1.1-3.3-1.9-5.1-2.3v.1c-1.1 2.9-.2 6.3 2.3 8.2l5.8 4.3s2.5-1.9 5.3-4z");
}
</style><path class="tu3nhnneh"/><path class="rki_d2qkr"/><path class="jwdsmbbsh"/><path class="yvyrvfbcg"/>`,
		"fallback": "vscode-icons:file-type-gitlab",
	});
}

export default Component;
