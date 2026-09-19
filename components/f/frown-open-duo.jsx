import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-ntwsbcy.css';
import '../../css/b/bzwehz--v.css';
import '../../css/a/a8924ab8w.css';
import '../../css/p/p20a_dbhv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-ntwsbcy"/><path class="bzwehz--v"/><path class="a8924ab8w"/><path class="p20a_dbhv"/></g>`,
		"fallback": "glyphs:frown-open-duo",
	});
}

export default Component;
