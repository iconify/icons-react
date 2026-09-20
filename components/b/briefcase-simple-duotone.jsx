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
		"content": `<style>.dhg84mvyh {
  x: 32.008px;
  y: 72px;
  width: 192px;
  height: 144px;
  rx: 8px;
  opacity: var(--svg-opacity--0-2, 0.2);
  fill: currentColor;
}

.krbpyacjd {
  d: path("M216.008 64H176v-8a24.027 24.027 0 0 0-24-24h-48a24.027 24.027 0 0 0-24 24v8H40.008a16.018 16.018 0 0 0-16 16v128a16.018 16.018 0 0 0 16 16h176a16.018 16.018 0 0 0 16-16V80a16.018 16.018 0 0 0-16-16zM96 56a8.01 8.01 0 0 1 8-8h48a8.01 8.01 0 0 1 8 8v8H96zm120.008 152h-176V80h176l.01 128z");
  fill: currentColor;
}
</style><rect class="dhg84mvyh"/><path class="krbpyacjd"/>`,
		"fallback": "ph:briefcase-simple-duotone",
	});
}

export default Component;
