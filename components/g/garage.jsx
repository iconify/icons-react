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
		"content": `<style>.fkb5_fb4z {
  fill: currentColor;
  d: path("M4.616 21q-.691 0-1.153-.462T3 19.385V4.615q0-.69.463-1.152T4.615 3h14.77q.69 0 1.152.463T21 4.616v14.769q0 .69-.463 1.153T19.385 21zm3.46-7.46q-.23-.23-.23-.54t.23-.54t.54-.23t.539.23t.23.54t-.23.54t-.54.23t-.539-.23m6.77 0q-.23-.23-.23-.54t.23-.54t.539-.23t.539.23t.23.54t-.23.54t-.54.23t-.539-.23M6 11.254v5.792q0 .196.129.325t.325.129h.092q.196 0 .325-.129T7 17.046V15.5h10v1.546q0 .196.129.325t.325.129h.092q.196 0 .325-.129t.129-.325v-5.792l-1.496-4.3q-.068-.215-.24-.335q-.172-.119-.387-.119H8.123q-.215 0-.387.12q-.172.119-.24.334zm1.304-.754l1.046-3h7.3l1.046 3z");
}
</style><path class="fkb5_fb4z"/>`,
		"fallback": "material-symbols-light:garage",
	});
}

export default Component;
