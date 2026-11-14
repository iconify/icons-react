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
		"content": `<style>.gzza30bja {
  d: path("M5.75 12L9 6h6.5l2.615 5.706M9 6l2.5 6l4-6m0 0l-.75-2.5H17m-2.5 11h7V20h-7Zm0 2.75h7");
}

.tk_e2p47z {
  d: path("M2.25 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm19.49-.267q-.013-.163-.04-.324t-.07-.319t-.1-.312t-.128-.3q-.072-.148-.156-.288q-.085-.14-.182-.271q-.097-.132-.206-.253q-.109-.122-.229-.234q-.12-.111-.25-.21q-.13-.1-.269-.187q-.138-.087-.284-.16t-.299-.134q-.152-.059-.309-.104q-.157-.046-.318-.076t-.324-.046t-.326-.015q-.162 0-.324.015q-.161.015-.321.045q-.159.03-.315.074q-.156.045-.307.104q-.152.058-.297.131q-.145.072-.283.158q-.137.085-.267.183q-.129.098-.249.208q-.119.109-.228.229t-.207.25q-.097.13-.182.268t-.157.284q-.072.145-.13.296q-.059.152-.102.308q-.044.156-.074.316q-.029.159-.043.321");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tk_e2p47z"/><path class="gzza30bja"/></g>`,
		"fallback": "uix-sharp:bike-space",
	});
}

export default Component;
