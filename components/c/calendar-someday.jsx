import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/j/jorbe3sdi.css';
import '../../css/f/flen3tbdj.css';
import '../../css/w/wd5v0hbqi.css';
import '../../css/s/sy7s6gb4r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVG4FH3bcts" class="n1mjunbsu"><path class="jorbe3sdi"/></mask><g class="flen3tbdj"><path mask="url(#SVG4FH3bcts)" class="wd5v0hbqi"/><path class="sy7s6gb4r"/></g>`,
		"fallback": "quill:calendar-someday",
	});
}

export default Component;
