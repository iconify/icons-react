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
		"content": `<style>.gbxy0jrxe {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.317 4.462q-.366-.878-1.317-.878q-.952 0-1.317.878l-.272.652q-.177.424-.635.459l-.708.055q-.953.072-1.261.977t.402 1.544l.618.556q.336.301.226.739l-.156.626q-.223.898.527 1.439q.75.54 1.533.045l.641-.408q.402-.256.804 0l.643.409q.781.494 1.531-.046q.75-.541.527-1.44l-.156-.625q-.11-.438.226-.739l.618-.556q.71-.639.402-1.544t-1.26-.977l-.709-.055q-.458-.035-.635-.459zM2.97 19.97l7-7q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113l-7 7q-.105.106-.243.163t-.287.057t-.287-.057t-.243-.163q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146t.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113");
}
</style><path class="gbxy0jrxe"/>`,
		"fallback": "uix-solid:genre-fantasy-film",
	});
}

export default Component;
