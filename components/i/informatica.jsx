import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuw36nbvq.css';
import '../../css/f/fq-4mcc3f.css';
import '../../css/g/gx7tam2pd.css';
import '../../css/j/jcnnhfisw.css';
import '../../css/z/zqsxmxbqb.css';
import '../../css/f/f8yuy4b7a.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuw36nbvq"/><path class="fq-4mcc3f"/><path class="gx7tam2pd"/><path class="jcnnhfisw"/><path class="zqsxmxbqb"/><path class="f8yuy4b7a"/>`,
		"fallback": "devicon:informatica",
	});
}

export default Component;
