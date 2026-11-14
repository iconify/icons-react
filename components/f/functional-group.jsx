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
		"content": `<style>.nmbh1ewxl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.25 10q0-2.382 1.684-4.066T16 4.25t4.066 1.684T21.75 10t-1.684 4.066T16 15.75q-1.84 0-3.264-1.005l-.755.805q.269.591.269 1.45q0 2.75-2.75 2.75T6.75 17q0-.845.259-1.43L5.93 14.491q-.585.259-1.43.259q-2.75 0-2.75-2.75T4.5 9.25T7.25 12q0 .845-.259 1.43l1.079 1.079q.585-.259 1.43-.259q.83 0 1.409.25l.717-.764Q10.25 12.153 10.25 10m4.524 2.571l.523-.558q.051-.054.09-.117q.039-.062.065-.131q.026-.07.038-.142q.012-.073.01-.147q-.003-.074-.02-.146q-.016-.072-.047-.139q-.03-.068-.073-.128t-.097-.11t-.117-.09q-.062-.039-.131-.065q-.07-.026-.142-.038q-.073-.012-.147-.01q-.074.003-.146.02q-.072.016-.139.047q-.068.03-.128.073t-.11.097l-.597.636Q13.25 10.99 13.25 10q0-2.75 2.75-2.75T18.75 10T16 12.75q-.703 0-1.226-.179");
}
</style><path class="nmbh1ewxl"/>`,
		"fallback": "uix-solid:functional-group",
	});
}

export default Component;
