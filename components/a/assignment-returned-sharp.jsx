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
		"content": `<style>.do88v_bwg {
  fill: currentColor;
  d: path("M12 15.308L15.308 12l-.708-.708l-2.1 2.05v-4.65h-1v4.65l-2.1-2.05l-.708.708zM4 20V4h6.316q-.137-.766.366-1.383Q11.184 2 12 2q.835 0 1.338.617T13.685 4H20v16zm8.538-15.77q.212-.213.212-.538t-.213-.537T12 2.942t-.537.213t-.213.537t.213.538t.537.212t.538-.212");
}
</style><path class="do88v_bwg"/>`,
		"fallback": "material-symbols-light:assignment-returned-sharp",
	});
}

export default Component;
