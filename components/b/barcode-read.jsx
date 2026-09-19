import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/n/n4or7achu.css';
import '../../css/y/yhqlegbzf.css';
import '../../css/d/drl5wdbml.css';
import '../../css/s/ssmzfzbqn.css';
import '../../css/y/yed4u6cxk.css';
import '../../css/g/gceog818q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="n4or7achu"/><rect class="yhqlegbzf"/><rect class="drl5wdbml"/><rect class="ssmzfzbqn"/><rect class="yed4u6cxk"/><rect class="gceog818q"/></g>`,
		"fallback": "glyphs-poly:barcode-read",
	});
}

export default Component;
