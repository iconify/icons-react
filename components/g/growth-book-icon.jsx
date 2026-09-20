import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":272};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cznshrfmh {
  fill: var(--svg-color--0047bd, #0047bd);
  d: path("m46.99 160.371l188.3-68.879s-16.249 14.293-15.534 45.234c.762 32.972 15.533 45.232 15.533 45.232l-26.307-10.127l-169.01 33.27s-3.277-9.94-3.339-17.316c-.16-20.055 10.358-27.414 10.358-27.414");
}

.hb8h8n5jy {
  fill: var(--svg-color--029dd1, #029dd1);
  d: path("M83.655 96.975L256 0s-16.248 14.293-15.534 45.232C241.228 78.205 256 90.466 256 90.466l-20.252-9.227l-158.537 62.063s-3.849-10.785-3.912-18.913c-.163-20.054 10.356-27.414 10.356-27.414");
}

.ukafo6j1t {
  fill: var(--svg-color--4817a1, #4817a1);
  d: path("m10.357 216.229l198.674-35.64s-16.248 14.292-15.534 45.232c.762 32.972 15.534 45.233 15.534 45.233H11.84S.175 263.968 0 242.614c-.16-20.056 10.357-26.385 10.357-26.385");
}
</style><path class="hb8h8n5jy"/><path class="cznshrfmh"/><path class="ukafo6j1t"/>`,
		"fallback": "logos:growth-book-icon",
	});
}

export default Component;
