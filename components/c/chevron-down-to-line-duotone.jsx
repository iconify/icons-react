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

.irssfwb4a {
  d: path("M17.2928 6.29C17.6834 5.9 18.3548 5.94 18.7453 6.33C19.0652 6.72 19.0728 7.34 18.7069 7.71L12.7069 13.71C12.3409 14.07 11.724 14.07 11.3312 13.75L5.2928 7.71C4.9024 7.32 4.9024 6.68 5.2928 6.29C5.6834 5.9 6.3164 5.9 6.7069 6.29L11.8583 11.44C11.9364 11.52 12.0635 11.52 12.1415 11.44L17.2928 6.29Z");
}

.k1roax3sa {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19 16C19.5523 16 20 16.45 20 17C19.9996 17.55 19.5521 18 19 18H5C4.4479 18 4.0004 17.55 4 17C4 16.45 4.4477 16 5 16H19ZM17.293 6.29C17.6835 5.9 18.3165 5.9 18.707 6.29C19.0972 6.68 19.0975 7.32 18.707 7.71L12.707 13.71C12.3166 14.1 11.6834 14.1 11.293 13.71L5.293 7.71C4.9025 7.32 4.9028 6.68 5.293 6.29C5.6835 5.9 6.3165 5.9 6.707 6.29L11.8584 11.44C11.9365 11.52 12.0635 11.52 12.1416 11.44L17.293 6.29Z");
}
</style><g class="cuyn6tgcc"><path class="k1roax3sa"/><path class="irssfwb4a"/></g>`,
		"fallback": "keyline-icons:chevron-down-to-line-duotone",
	});
}

export default Component;
