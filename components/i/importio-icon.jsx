import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":346};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nd9lvvb1h {
  fill: var(--svg-color--772ce8, #772ce8);
  d: path("m82.269 182.197l82.284 81.872l-82.284 81.858L0 264.053zm91.446-91.023L256 173.047l-82.285 81.857l-82.27-81.874zM82.27 0l82.284 81.873l-82.284 81.856L0 81.857z");
}
</style><path class="nd9lvvb1h"/>`,
		"fallback": "logos:importio-icon",
	});
}

export default Component;
