import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsr-3qb_q.css';
import '../../css/f/f_a8v7g1a.css';
import '../../css/j/j3ix0cc2w.css';
import '../../css/v/vpp73z8ua.css';
import '../../css/r/r_zz3cc7z.css';
import '../../css/c/c7sidtbwe.css';
import '../../css/s/smq2tfcqx.css';
import '../../css/m/mnp7i_e7m.css';
import '../../css/b/b9z49hbkg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsr-3qb_q"/><path class="f_a8v7g1a"/><path class="j3ix0cc2w"/><path class="vpp73z8ua"/><path class="r_zz3cc7z"/><path class="c7sidtbwe"/><path class="smq2tfcqx"/><path class="mnp7i_e7m"/><path class="b9z49hbkg"/>`,
		"fallback": "openmoji:add-contact",
	});
}

export default Component;
