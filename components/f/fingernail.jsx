import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/g/gvwzbcc6a.css';
import '../../css/z/zu9gbnpjd.css';
import '../../css/x/xyd5npiae.css';
import '../../css/e/eu0dkrbpd.css';
import '../../css/r/rkbzjgb1v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="gvwzbcc6a"/><path class="zu9gbnpjd"/><rect class="xyd5npiae"/><path class="eu0dkrbpd"/><path class="rkbzjgb1v"/></g>`,
		"fallback": "icon-park:fingernail",
	});
}

export default Component;
