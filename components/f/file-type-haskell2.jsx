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
		"content": `<style>.arhmojbya {
  stop-color: var(--svg-color--faba09, #faba09);
}

.ax5izzbhf {
  d: path("M2 25.882L8.588 16L2 6.118h4.941L13.529 16l-6.588 9.882Zm6.588 0L15.177 16L8.588 6.118h4.941l13.177 19.764h-4.941l-4.117-6.176l-4.118 6.176Zm15.922-5.764l-2.2-3.294H30v3.294Zm-3.294-4.941l-2.2-3.294H30v3.294Z");
}

.l-ld2l5jr {
  stop-color: var(--svg-color--b42c01, #b42c01);
}
</style><defs><linearGradient id="SVGfH8N5wXp" x1=".996" x2=".951" y1="-206.057" y2="-206.057" gradientTransform="matrix(259.941 0 0 -183.487 -237.941 -37792.788)" gradientUnits="userSpaceOnUse"><stop offset="0" class="arhmojbya"/><stop offset="1" class="l-ld2l5jr"/></linearGradient></defs><path fill="url(#SVGfH8N5wXp)" class="ax5izzbhf"/>`,
		"fallback": "vscode-icons:file-type-haskell2",
	});
}

export default Component;
