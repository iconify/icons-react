import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/da1skdh9u.css';
import '../../css/l/l958i55ae.css';
import '../../css/c/cyk_bcwer.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="da1skdh9u"/><path class="l958i55ae"/><path class="cyk_bcwer"/></g>`,
		"fallback": "glyphs:adjust-bold",
	});
}

export default Component;
