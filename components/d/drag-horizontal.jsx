import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/w/w862te5zz.css';
import '../../css/u/upu35tb5b.css';
import '../../css/a/an4w8gbhl.css';
import '../../css/i/ino9h4bpe.css';
import '../../css/c/cw05fe7ho.css';
import '../../css/y/yhpdkpm1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle transform="rotate(-180 20 8)" class="w862te5zz"/><circle transform="rotate(-180 20 16)" class="upu35tb5b"/><circle transform="rotate(-180 12 8)" class="an4w8gbhl"/><circle transform="rotate(-180 12 16)" class="ino9h4bpe"/><circle transform="rotate(-180 4 8)" class="cw05fe7ho"/><circle transform="rotate(-180 4 16)" class="yhpdkpm1v"/></g>`,
		"fallback": "akar-icons:drag-horizontal",
	});
}

export default Component;
