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
		"content": `<style>.unq4tnbgk {
  fill: currentColor;
  d: path("m12.546 9.966l-.94-.941l.788-1.904H9.78q-.21-.075-.355-.24t-.22-.335q-.11-.205.018-.433t.419-.228H18.5q.26 0 .438.178t.178.437t-.178.438t-.438.178h-4.742zM18.985 20.4l-7.62-7.638l-2.138 5.044q-.079.175-.226.28t-.347.106q-.338 0-.52-.28q-.18-.281-.047-.589l2.344-5.496l-7.023-7.004q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16l15.576 15.577q.14.14.15.345t-.15.363t-.353.16t-.354-.16");
}
</style><path class="unq4tnbgk"/>`,
		"fallback": "material-symbols-light:format-clear-outline-rounded",
	});
}

export default Component;
