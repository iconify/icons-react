import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzpdxtbdv.css';
import '../../css/s/szze3yyxf.css';
import '../../css/d/dhb5rkb0l.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzpdxtbdv"/><path class="szze3yyxf"/><path class="dhb5rkb0l"/><path class="z4sj3ixdz"/>`,
		"fallback": "energy-icons:database-check-48",
	});
}

export default Component;
