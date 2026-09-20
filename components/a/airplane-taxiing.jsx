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
		"content": `<style>.w2n8e-bgv {
  fill: currentColor;
  d: path("M208 96h-60.68l-45.66-45.66A8 8 0 0 0 96 48h-8a16 16 0 0 0-15.17 21.06l9 26.94H59.32L37.66 74.34A8 8 0 0 0 32 72h-8A16 16 0 0 0 8.69 92.6l14.07 46.89A39.75 39.75 0 0 0 61.07 168H240a8 8 0 0 0 8-8v-24a40 40 0 0 0-40-40m24 56H61.07a23.85 23.85 0 0 1-23-17.1L24 88h4.68l21.66 21.66A8 8 0 0 0 56 112h36.9a8 8 0 0 0 7.59-10.53L88 64h4.68l45.66 45.66A8 8 0 0 0 144 112h64a24 24 0 0 1 24 24Zm-8 48a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-96 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16");
}
</style><path class="w2n8e-bgv"/>`,
		"fallback": "ph:airplane-taxiing",
	});
}

export default Component;
