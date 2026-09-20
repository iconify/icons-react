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
		"content": `<style>.t_49v1bcp {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-11.72 116.28a40 40 0 0 1-56.4.17l-50.59-45.11L97 111a24 24 0 1 0 0 34c.36-.36.71-.73 1-1.1a8 8 0 1 1 12 10.6c-.55.62-1.13 1.23-1.71 1.81a40 40 0 1 1-.17-56.73l50.58 45.11l.33.31a24 24 0 1 0-.03-34c-.36.36-.7.72-1 1.1a8 8 0 0 1-12-10.59c.54-.62 1.12-1.24 1.71-1.82a40 40 0 0 1 56.57 56.56Z");
}
</style><path class="t_49v1bcp"/>`,
		"fallback": "ph:infinity-fill",
	});
}

export default Component;
