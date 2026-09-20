import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8f5tl6jz.css';
import '../../css/u/u1wbhtbcr.css';
import '../../css/r/r46vz6iac.css';
import '../../css/j/j5k34_byv.css';
import '../../css/k/kwqa4-bds.css';
import '../../css/s/sm5k__3ca.css';
import '../../css/g/g7gsq4buj.css';
import '../../css/x/xi94s3bdy.css';
import '../../css/v/vsmabt--q.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8f5tl6jz"/><path class="u1wbhtbcr"/><path class="r46vz6iac"/><path class="j5k34_byv"/><path class="kwqa4-bds"/><path class="sm5k__3ca"/><path class="g7gsq4buj"/><path class="xi94s3bdy"/><path class="vsmabt--q"/>`,
		"fallback": "openmoji:deaf-person",
	});
}

export default Component;
