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
		"content": `<style>.rkgiwqbgu {
  fill: var(--svg-color--fc6515, #fc6515);
  d: path("M2 16h14V2h14v28H2z");
}
</style><path class="rkgiwqbgu"/>`,
		"fallback": "vscode-icons:file-type-quokka",
	});
}

export default Component;
