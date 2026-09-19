import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9k7-db_t.css';
import '../../css/z/zlacpiy1f.css';
import '../../css/h/hnpx1cg6w.css';
import '../../css/w/w91--wivs.css';
import '../../css/s/s3md2o4di.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9k7-db_t"/><path class="zlacpiy1f"/><path class="hnpx1cg6w"/><path class="w91--wivs"/><path class="s3md2o4di"/>`,
		"fallback": "ep:bicycle",
	});
}

export default Component;
