import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bos87ebvx.css';
import '../../css/v/vb-fd4b1z.css';
import '../../css/a/a27m5rbjt.css';
import '../../css/w/w2027vbhs.css';
import '../../css/g/gam_g5zql.css';
import '../../css/y/yn4qg-b1u.css';
import '../../css/x/xb8wjvimy.css';
import '../../css/i/i4b-0cb3k.css';
import '../../css/v/ve3ymbcvt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bos87ebvx"/><path class="vb-fd4b1z"/><path class="a27m5rbjt"/><path class="w2027vbhs"/><path class="gam_g5zql"/><path class="yn4qg-b1u"/><path class="xb8wjvimy"/><path class="i4b-0cb3k"/><path class="ve3ymbcvt"/>`,
		"fallback": "iconito:cheesecake",
	});
}

export default Component;
