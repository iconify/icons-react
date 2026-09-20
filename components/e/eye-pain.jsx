import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgoy0ab0m.css';
import '../../css/d/dd5bkjbnw.css';
import '../../css/c/c__1nwb2i.css';
import '../../css/d/dlgof86cm.css';
import '../../css/x/xtz0lmbqj.css';
import '../../css/s/ss9tdmbfp.css';
import '../../css/n/nhgf61bje.css';
import '../../css/y/y1reyt_5c.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="mgoy0ab0m"/><circle class="dd5bkjbnw"/><ellipse class="c__1nwb2i"/><circle class="dlgof86cm"/><circle class="xtz0lmbqj"/><circle class="ss9tdmbfp"/><path class="nhgf61bje"/><path class="y1reyt_5c"/>`,
		"fallback": "openmoji:eye-pain",
	});
}

export default Component;
