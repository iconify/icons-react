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
		"content": `<style>.lm8agdvjs {
  fill: currentColor;
  d: path("M23 15C23 19.4183 19.4183 23 15 23C10.5817 23 7 19.4183 7 15C7 10.5817 10.5817 7 15 7C19.4183 7 23 10.5817 23 15Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q5f3lzm2h {
  d: path("M4.0503 13.9497C3.8804 13.7799 3.7193 13.6013 3.5678 13.4149M2.0371 9.7194C1.9876 9.2411 1.9876 8.7589 2.0371 8.2806M3.5678 4.5851C3.8711 4.212 4.212 3.8711 4.5851 3.5678M8.2806 2.0371C8.7589 1.9876 9.2411 1.9876 9.7194 2.0371M13.4149 3.5678C13.6013 3.7193 13.7799 3.8804 13.9497 4.0503");
}
</style><g class="nrj6p8qat"><path class="lm8agdvjs"/><path class="q5f3lzm2h"/></g>`,
		"fallback": "keyline-icons:circles-dashed-fill",
	});
}

export default Component;
