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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.qm0zfug2w {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 2V4H16.651L8.914 21.406C8.753 21.767 8.395 22 8 22H2V20H7.349L15.142 2.467C15.329 2.242 15.698 2 16 2H22Z");
}

.qzvsstb9d {
  d: path("M22 20V22H12V20H22Z");
}

.xl-o0accs {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 20V22H12V20H22Z");
}
</style><g class="cuyn6tgcc"><path class="qm0zfug2w"/><path class="xl-o0accs"/><path class="qzvsstb9d"/></g>`,
		"fallback": "keyline-icons:alt-sharp-duotone",
	});
}

export default Component;
