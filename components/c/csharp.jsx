import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db4kthskb.css';
import '../../css/k/k3pjpkicj.css';
import '../../css/s/s3clobqog.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/f/fkix1bffw.css';
import '../../css/i/inv44fb2j.css';

const viewBox = {"width":255.58,"height":290.11,"top":-1.43};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db4kthskb"/><path class="k3pjpkicj"/><path class="s3clobqog"/><g class="n1mjunbsu"><path class="fkix1bffw"/><path class="inv44fb2j"/></g>`,
		"fallback": "thesvg-color:csharp",
	});
}

export default Component;
