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
		"content": `<style>.xm4av5bav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.2531 7.91849L16.0815 10.7469C17.2531 11.9185 17.2531 13.8179 16.0815 14.9896L15.0209 16.0502C12.8995 18.1715 14.4905 20.8232 13.6066 21.7071C13.2161 22.0976 12.583 22.0976 12.1924 21.7071L2.29291 11.8076C1.90241 11.417 1.90241 10.7839 2.29291 10.3934C3.17681 9.50949 5.82851 11.1005 7.94981 8.97909L9.01041 7.91849C10.1821 6.74689 12.0815 6.74689 13.2531 7.91849ZM16.0815 10.7469L21.4142 5.41419C22.1953 4.63309 22.1953 3.36679 21.4142 2.58579C20.6332 1.80469 19.3669 1.80469 18.5858 2.58579L13.2531 7.91849M3.18951 18.361C3.00461 19.0512 3.20191 19.7876 3.70711 20.2929C4.21241 20.7981 4.94881 20.9954 5.63901 20.8105");
}
</style><path class="xm4av5bav"/>`,
		"fallback": "keyline-icons:hand-bell",
	});
}

export default Component;
