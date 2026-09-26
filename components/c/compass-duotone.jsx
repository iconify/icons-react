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
		"content": `<style>.i8pqxpf6h {
  d: path("M15.1026 7.6325C15.8844 7.3719 16.6281 8.1156 16.3675 8.8974L14.8162 13.5513C14.6172 14.1485 14.1485 14.6172 13.5513 14.8162L8.8974 16.3675C8.1156 16.6281 7.3719 15.8844 7.6325 15.1026L9.1838 10.4487C9.3828 9.8515 9.8515 9.3828 10.4487 9.1838L15.1026 7.6325Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t8drw368i {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M23 12C23 18.0751 18.0751 23 12 23C5.9249 23 1 18.0751 1 12C1 5.9249 5.9249 1 12 1C18.0751 1 23 5.9249 23 12Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="t8drw368i"/><path class="i8pqxpf6h"/></g>`,
		"fallback": "keyline-icons:compass-duotone",
	});
}

export default Component;
