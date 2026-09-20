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
		"content": `<style>.bobjvaclv {
  fill: var(--svg-color--8f4e8b, #8f4e8b);
  d: path("m24.51 20.118l-2.196-3.294L30 16.823v3.295zm-3.294-4.941l-2.196-3.294L30 11.882v3.295z");
}

.cxsa4hbou {
  fill: var(--svg-color--453a62, #453a62);
  d: path("M2 25.882L8.588 16L2 6.118h4.941L13.529 16l-6.588 9.882z");
}

.myt9ozbjr {
  fill: var(--svg-color--5e5086, #5e5086);
  d: path("M8.588 25.882L15.177 16L8.588 6.118h4.941l13.177 19.764h-4.941l-4.118-6.176l-4.118 6.176z");
}
</style><path class="cxsa4hbou"/><path class="myt9ozbjr"/><path class="bobjvaclv"/>`,
		"fallback": "vscode-icons:file-type-haskell",
	});
}

export default Component;
