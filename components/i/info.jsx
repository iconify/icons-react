import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/d/d9rbyu3nx.css';
import '../../css/f/flen3tbdj.css';
import '../../css/t/t1i8eebpo.css';
import '../../css/y/ykhh1jp9i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGwjo0bdvJ" class="n1mjunbsu"><path class="d9rbyu3nx"/></mask><g class="flen3tbdj"><path class="t1i8eebpo"/><path mask="url(#SVGwjo0bdvJ)" class="ykhh1jp9i"/></g>`,
		"fallback": "quill:info",
	});
}

export default Component;
