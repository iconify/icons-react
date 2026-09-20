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
		"content": `<style>.biq8pwxol {
  fill: currentColor;
  d: path("M6.808 11.192h3.884v-.884h-3V8.885h2.231q.327 0 .548-.221q.221-.222.221-.548V6.577q0-.327-.22-.548q-.222-.221-.549-.221H6.808v.884h3v1.423H7.577q-.327 0-.548.221q-.221.222-.221.548zm6.115 0h3.116q.327 0 .548-.22q.22-.222.22-.549V6.577q0-.327-.22-.548q-.221-.221-.548-.221h-3.116v.884h3v1.423h-2v.77h2v1.423h-3zm-6.615 7h.884v-4.5h1.616v3h.884v-3h1.616v4.5h.884V13.5q0-.31-.191-.501t-.501-.191H7q-.31 0-.501.191q-.191.192-.191.501zm7.5 0h.884v-1.5H17q.31 0 .501-.191t.191-.501v-2.5q0-.31-.191-.501q-.192-.191-.501-.191h-3.192zm.884-2.384v-2.116h2.116v2.116zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="biq8pwxol"/>`,
		"fallback": "material-symbols-light:23mp",
	});
}

export default Component;
