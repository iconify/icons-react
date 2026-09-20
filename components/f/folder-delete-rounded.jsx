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
		"content": `<style>.rfrknc81q {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.611 5H8.92q.333 0 .635.13q.302.132.519.349L11.596 7h7.789q.69 0 1.153.463T21 8.616v8.769q0 .69-.462 1.153T19.385 19zm9.615-2.384h2.385q.496 0 .844-.348t.348-.845v-4.538h.365q.192 0 .317-.125q.126-.125.126-.317t-.126-.317t-.317-.126h-1.865v-.211q0-.162-.122-.283q-.12-.121-.282-.121h-.962q-.161 0-.283.12q-.12.122-.12.284V10h-1.866q-.192 0-.317.125t-.125.317t.125.317t.317.125h.365v4.539q0 .497.348.845q.348.347.845.347m-.308-5.73h3v4.538q0 .135-.087.221t-.22.087H14.23q-.135 0-.222-.087q-.086-.086-.086-.221z");
}
</style><path class="rfrknc81q"/>`,
		"fallback": "material-symbols-light:folder-delete-rounded",
	});
}

export default Component;
